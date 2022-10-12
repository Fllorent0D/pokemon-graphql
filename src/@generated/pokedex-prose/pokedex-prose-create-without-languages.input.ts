import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateNestedOneWithoutPokedex_proseInput } from '../pokedexes/pokedexes-create-nested-one-without-pokedex-prose.input';

@InputType()
export class pokedex_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => pokedexesCreateNestedOneWithoutPokedex_proseInput, {nullable:false})
    pokedexes!: pokedexesCreateNestedOneWithoutPokedex_proseInput;
}
