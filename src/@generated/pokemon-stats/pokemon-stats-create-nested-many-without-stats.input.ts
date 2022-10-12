import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsCreateWithoutStatsInput } from './pokemon-stats-create-without-stats.input';
import { Type } from 'class-transformer';
import { pokemon_statsCreateOrConnectWithoutStatsInput } from './pokemon-stats-create-or-connect-without-stats.input';
import { pokemon_statsWhereUniqueInput } from './pokemon-stats-where-unique.input';

@InputType()
export class pokemon_statsCreateNestedManyWithoutStatsInput {

    @Field(() => [pokemon_statsCreateWithoutStatsInput], {nullable:true})
    @Type(() => pokemon_statsCreateWithoutStatsInput)
    create?: Array<pokemon_statsCreateWithoutStatsInput>;

    @Field(() => [pokemon_statsCreateOrConnectWithoutStatsInput], {nullable:true})
    @Type(() => pokemon_statsCreateOrConnectWithoutStatsInput)
    connectOrCreate?: Array<pokemon_statsCreateOrConnectWithoutStatsInput>;

    @Field(() => [pokemon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_statsWhereUniqueInput)
    connect?: Array<pokemon_statsWhereUniqueInput>;
}
