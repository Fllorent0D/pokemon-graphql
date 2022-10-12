import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionUpdateWithoutMovesInput } from './pokemon-evolution-update-without-moves.input';
import { pokemon_evolutionCreateWithoutMovesInput } from './pokemon-evolution-create-without-moves.input';

@InputType()
export class pokemon_evolutionUpsertWithWhereUniqueWithoutMovesInput {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;

    @Field(() => pokemon_evolutionUpdateWithoutMovesInput, {nullable:false})
    @Type(() => pokemon_evolutionUpdateWithoutMovesInput)
    update!: pokemon_evolutionUpdateWithoutMovesInput;

    @Field(() => pokemon_evolutionCreateWithoutMovesInput, {nullable:false})
    @Type(() => pokemon_evolutionCreateWithoutMovesInput)
    create!: pokemon_evolutionCreateWithoutMovesInput;
}
