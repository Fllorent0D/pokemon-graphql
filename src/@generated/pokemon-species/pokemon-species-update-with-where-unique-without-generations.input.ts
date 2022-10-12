import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesUpdateWithoutGenerationsInput } from './pokemon-species-update-without-generations.input';

@InputType()
export class pokemon_speciesUpdateWithWhereUniqueWithoutGenerationsInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutGenerationsInput)
    data!: pokemon_speciesUpdateWithoutGenerationsInput;
}
