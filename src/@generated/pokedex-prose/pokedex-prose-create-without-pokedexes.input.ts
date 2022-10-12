import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokedex_proseInput } from '../languages/languages-create-nested-one-without-pokedex-prose.input';

@InputType()
export class pokedex_proseCreateWithoutPokedexesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => languagesCreateNestedOneWithoutPokedex_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokedex_proseInput;
}
