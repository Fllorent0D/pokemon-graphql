import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsCreateWithoutStatsInput } from './pokemon-stats-create-without-stats.input';
import { Type } from 'class-transformer';
import { pokemon_statsCreateOrConnectWithoutStatsInput } from './pokemon-stats-create-or-connect-without-stats.input';
import { pokemon_statsUpsertWithWhereUniqueWithoutStatsInput } from './pokemon-stats-upsert-with-where-unique-without-stats.input';
import { pokemon_statsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { pokemon_statsUpdateWithWhereUniqueWithoutStatsInput } from './pokemon-stats-update-with-where-unique-without-stats.input';
import { pokemon_statsUpdateManyWithWhereWithoutStatsInput } from './pokemon-stats-update-many-with-where-without-stats.input';
import { pokemon_statsScalarWhereInput } from './pokemon-stats-scalar-where.input';

@InputType()
export class pokemon_statsUpdateManyWithoutStatsNestedInput {

    @Field(() => [pokemon_statsCreateWithoutStatsInput], {nullable:true})
    @Type(() => pokemon_statsCreateWithoutStatsInput)
    create?: Array<pokemon_statsCreateWithoutStatsInput>;

    @Field(() => [pokemon_statsCreateOrConnectWithoutStatsInput], {nullable:true})
    @Type(() => pokemon_statsCreateOrConnectWithoutStatsInput)
    connectOrCreate?: Array<pokemon_statsCreateOrConnectWithoutStatsInput>;

    @Field(() => [pokemon_statsUpsertWithWhereUniqueWithoutStatsInput], {nullable:true})
    @Type(() => pokemon_statsUpsertWithWhereUniqueWithoutStatsInput)
    upsert?: Array<pokemon_statsUpsertWithWhereUniqueWithoutStatsInput>;

    @Field(() => [pokemon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_statsWhereUniqueInput)
    set?: Array<pokemon_statsWhereUniqueInput>;

    @Field(() => [pokemon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_statsWhereUniqueInput)
    disconnect?: Array<pokemon_statsWhereUniqueInput>;

    @Field(() => [pokemon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_statsWhereUniqueInput)
    delete?: Array<pokemon_statsWhereUniqueInput>;

    @Field(() => [pokemon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_statsWhereUniqueInput)
    connect?: Array<pokemon_statsWhereUniqueInput>;

    @Field(() => [pokemon_statsUpdateWithWhereUniqueWithoutStatsInput], {nullable:true})
    @Type(() => pokemon_statsUpdateWithWhereUniqueWithoutStatsInput)
    update?: Array<pokemon_statsUpdateWithWhereUniqueWithoutStatsInput>;

    @Field(() => [pokemon_statsUpdateManyWithWhereWithoutStatsInput], {nullable:true})
    @Type(() => pokemon_statsUpdateManyWithWhereWithoutStatsInput)
    updateMany?: Array<pokemon_statsUpdateManyWithWhereWithoutStatsInput>;

    @Field(() => [pokemon_statsScalarWhereInput], {nullable:true})
    @Type(() => pokemon_statsScalarWhereInput)
    deleteMany?: Array<pokemon_statsScalarWhereInput>;
}
