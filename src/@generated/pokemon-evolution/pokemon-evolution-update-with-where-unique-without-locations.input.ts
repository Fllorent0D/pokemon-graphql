import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionUpdateWithoutLocationsInput } from './pokemon-evolution-update-without-locations.input';

@InputType()
export class pokemon_evolutionUpdateWithWhereUniqueWithoutLocationsInput {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;

    @Field(() => pokemon_evolutionUpdateWithoutLocationsInput, {nullable:false})
    @Type(() => pokemon_evolutionUpdateWithoutLocationsInput)
    data!: pokemon_evolutionUpdateWithoutLocationsInput;
}
