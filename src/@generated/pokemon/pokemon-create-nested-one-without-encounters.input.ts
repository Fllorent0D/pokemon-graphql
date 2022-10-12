import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutEncountersInput } from './pokemon-create-without-encounters.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutEncountersInput } from './pokemon-create-or-connect-without-encounters.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class pokemonCreateNestedOneWithoutEncountersInput {

    @Field(() => pokemonCreateWithoutEncountersInput, {nullable:true})
    @Type(() => pokemonCreateWithoutEncountersInput)
    create?: pokemonCreateWithoutEncountersInput;

    @Field(() => pokemonCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutEncountersInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;
}
