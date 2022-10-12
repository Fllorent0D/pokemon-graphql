import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutGenerationsInput } from './pokemon-species-create-without-generations.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutGenerationsInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutGenerationsInput)
    create!: pokemon_speciesCreateWithoutGenerationsInput;
}
