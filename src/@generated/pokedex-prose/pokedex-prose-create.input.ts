import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokedex_proseInput } from '../languages/languages-create-nested-one-without-pokedex-prose.input';
import { pokedexesCreateNestedOneWithoutPokedex_proseInput } from '../pokedexes/pokedexes-create-nested-one-without-pokedex-prose.input';

@InputType()
export class pokedex_proseCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => languagesCreateNestedOneWithoutPokedex_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokedex_proseInput;

    @Field(() => pokedexesCreateNestedOneWithoutPokedex_proseInput, {nullable:false})
    pokedexes!: pokedexesCreateNestedOneWithoutPokedex_proseInput;
}
