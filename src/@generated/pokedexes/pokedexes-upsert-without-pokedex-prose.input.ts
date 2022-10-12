import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesUpdateWithoutPokedex_proseInput } from './pokedexes-update-without-pokedex-prose.input';
import { Type } from 'class-transformer';
import { pokedexesCreateWithoutPokedex_proseInput } from './pokedexes-create-without-pokedex-prose.input';

@InputType()
export class pokedexesUpsertWithoutPokedex_proseInput {

    @Field(() => pokedexesUpdateWithoutPokedex_proseInput, {nullable:false})
    @Type(() => pokedexesUpdateWithoutPokedex_proseInput)
    update!: pokedexesUpdateWithoutPokedex_proseInput;

    @Field(() => pokedexesCreateWithoutPokedex_proseInput, {nullable:false})
    @Type(() => pokedexesCreateWithoutPokedex_proseInput)
    create!: pokedexesCreateWithoutPokedex_proseInput;
}
