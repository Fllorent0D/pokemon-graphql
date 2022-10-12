import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutEncountersInput } from './pokemon-create-without-encounters.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutEncountersInput } from './pokemon-create-or-connect-without-encounters.input';
import { pokemonUpsertWithoutEncountersInput } from './pokemon-upsert-without-encounters.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { pokemonUpdateWithoutEncountersInput } from './pokemon-update-without-encounters.input';

@InputType()
export class pokemonUpdateOneRequiredWithoutEncountersNestedInput {

    @Field(() => pokemonCreateWithoutEncountersInput, {nullable:true})
    @Type(() => pokemonCreateWithoutEncountersInput)
    create?: pokemonCreateWithoutEncountersInput;

    @Field(() => pokemonCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutEncountersInput;

    @Field(() => pokemonUpsertWithoutEncountersInput, {nullable:true})
    @Type(() => pokemonUpsertWithoutEncountersInput)
    upsert?: pokemonUpsertWithoutEncountersInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;

    @Field(() => pokemonUpdateWithoutEncountersInput, {nullable:true})
    @Type(() => pokemonUpdateWithoutEncountersInput)
    update?: pokemonUpdateWithoutEncountersInput;
}
