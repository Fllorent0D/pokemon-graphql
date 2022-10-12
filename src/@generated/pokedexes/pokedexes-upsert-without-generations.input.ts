import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesUpdateWithoutGenerationsInput } from './pokedexes-update-without-generations.input';
import { Type } from 'class-transformer';
import { pokedexesCreateWithoutGenerationsInput } from './pokedexes-create-without-generations.input';

@InputType()
export class pokedexesUpsertWithoutGenerationsInput {

    @Field(() => pokedexesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => pokedexesUpdateWithoutGenerationsInput)
    update!: pokedexesUpdateWithoutGenerationsInput;

    @Field(() => pokedexesCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => pokedexesCreateWithoutGenerationsInput)
    create!: pokedexesCreateWithoutGenerationsInput;
}
