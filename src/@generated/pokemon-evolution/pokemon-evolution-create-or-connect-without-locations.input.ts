import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateWithoutLocationsInput } from './pokemon-evolution-create-without-locations.input';

@InputType()
export class pokemon_evolutionCreateOrConnectWithoutLocationsInput {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;

    @Field(() => pokemon_evolutionCreateWithoutLocationsInput, {nullable:false})
    @Type(() => pokemon_evolutionCreateWithoutLocationsInput)
    create!: pokemon_evolutionCreateWithoutLocationsInput;
}
