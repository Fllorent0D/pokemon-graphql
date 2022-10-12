import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_mapCreateWithoutEncountersInput } from './encounter-condition-value-map-create-without-encounters.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapCreateOrConnectWithoutEncountersInput } from './encounter-condition-value-map-create-or-connect-without-encounters.input';
import { encounter_condition_value_mapUpsertWithWhereUniqueWithoutEncountersInput } from './encounter-condition-value-map-upsert-with-where-unique-without-encounters.input';
import { encounter_condition_value_mapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { encounter_condition_value_mapUpdateWithWhereUniqueWithoutEncountersInput } from './encounter-condition-value-map-update-with-where-unique-without-encounters.input';
import { encounter_condition_value_mapUpdateManyWithWhereWithoutEncountersInput } from './encounter-condition-value-map-update-many-with-where-without-encounters.input';
import { encounter_condition_value_mapScalarWhereInput } from './encounter-condition-value-map-scalar-where.input';

@InputType()
export class encounter_condition_value_mapUpdateManyWithoutEncountersNestedInput {

    @Field(() => [encounter_condition_value_mapCreateWithoutEncountersInput], {nullable:true})
    @Type(() => encounter_condition_value_mapCreateWithoutEncountersInput)
    create?: Array<encounter_condition_value_mapCreateWithoutEncountersInput>;

    @Field(() => [encounter_condition_value_mapCreateOrConnectWithoutEncountersInput], {nullable:true})
    @Type(() => encounter_condition_value_mapCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: Array<encounter_condition_value_mapCreateOrConnectWithoutEncountersInput>;

    @Field(() => [encounter_condition_value_mapUpsertWithWhereUniqueWithoutEncountersInput], {nullable:true})
    @Type(() => encounter_condition_value_mapUpsertWithWhereUniqueWithoutEncountersInput)
    upsert?: Array<encounter_condition_value_mapUpsertWithWhereUniqueWithoutEncountersInput>;

    @Field(() => [encounter_condition_value_mapWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    set?: Array<encounter_condition_value_mapWhereUniqueInput>;

    @Field(() => [encounter_condition_value_mapWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    disconnect?: Array<encounter_condition_value_mapWhereUniqueInput>;

    @Field(() => [encounter_condition_value_mapWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    delete?: Array<encounter_condition_value_mapWhereUniqueInput>;

    @Field(() => [encounter_condition_value_mapWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    connect?: Array<encounter_condition_value_mapWhereUniqueInput>;

    @Field(() => [encounter_condition_value_mapUpdateWithWhereUniqueWithoutEncountersInput], {nullable:true})
    @Type(() => encounter_condition_value_mapUpdateWithWhereUniqueWithoutEncountersInput)
    update?: Array<encounter_condition_value_mapUpdateWithWhereUniqueWithoutEncountersInput>;

    @Field(() => [encounter_condition_value_mapUpdateManyWithWhereWithoutEncountersInput], {nullable:true})
    @Type(() => encounter_condition_value_mapUpdateManyWithWhereWithoutEncountersInput)
    updateMany?: Array<encounter_condition_value_mapUpdateManyWithWhereWithoutEncountersInput>;

    @Field(() => [encounter_condition_value_mapScalarWhereInput], {nullable:true})
    @Type(() => encounter_condition_value_mapScalarWhereInput)
    deleteMany?: Array<encounter_condition_value_mapScalarWhereInput>;
}
