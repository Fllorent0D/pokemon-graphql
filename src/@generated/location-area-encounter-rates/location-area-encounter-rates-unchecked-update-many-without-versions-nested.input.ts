import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesCreateWithoutVersionsInput } from './location-area-encounter-rates-create-without-versions.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesCreateOrConnectWithoutVersionsInput } from './location-area-encounter-rates-create-or-connect-without-versions.input';
import { location_area_encounter_ratesUpsertWithWhereUniqueWithoutVersionsInput } from './location-area-encounter-rates-upsert-with-where-unique-without-versions.input';
import { location_area_encounter_ratesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { location_area_encounter_ratesUpdateWithWhereUniqueWithoutVersionsInput } from './location-area-encounter-rates-update-with-where-unique-without-versions.input';
import { location_area_encounter_ratesUpdateManyWithWhereWithoutVersionsInput } from './location-area-encounter-rates-update-many-with-where-without-versions.input';
import { location_area_encounter_ratesScalarWhereInput } from './location-area-encounter-rates-scalar-where.input';

@InputType()
export class location_area_encounter_ratesUncheckedUpdateManyWithoutVersionsNestedInput {

    @Field(() => [location_area_encounter_ratesCreateWithoutVersionsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesCreateWithoutVersionsInput)
    create?: Array<location_area_encounter_ratesCreateWithoutVersionsInput>;

    @Field(() => [location_area_encounter_ratesCreateOrConnectWithoutVersionsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: Array<location_area_encounter_ratesCreateOrConnectWithoutVersionsInput>;

    @Field(() => [location_area_encounter_ratesUpsertWithWhereUniqueWithoutVersionsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesUpsertWithWhereUniqueWithoutVersionsInput)
    upsert?: Array<location_area_encounter_ratesUpsertWithWhereUniqueWithoutVersionsInput>;

    @Field(() => [location_area_encounter_ratesWhereUniqueInput], {nullable:true})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    set?: Array<location_area_encounter_ratesWhereUniqueInput>;

    @Field(() => [location_area_encounter_ratesWhereUniqueInput], {nullable:true})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    disconnect?: Array<location_area_encounter_ratesWhereUniqueInput>;

    @Field(() => [location_area_encounter_ratesWhereUniqueInput], {nullable:true})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    delete?: Array<location_area_encounter_ratesWhereUniqueInput>;

    @Field(() => [location_area_encounter_ratesWhereUniqueInput], {nullable:true})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    connect?: Array<location_area_encounter_ratesWhereUniqueInput>;

    @Field(() => [location_area_encounter_ratesUpdateWithWhereUniqueWithoutVersionsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesUpdateWithWhereUniqueWithoutVersionsInput)
    update?: Array<location_area_encounter_ratesUpdateWithWhereUniqueWithoutVersionsInput>;

    @Field(() => [location_area_encounter_ratesUpdateManyWithWhereWithoutVersionsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesUpdateManyWithWhereWithoutVersionsInput)
    updateMany?: Array<location_area_encounter_ratesUpdateManyWithWhereWithoutVersionsInput>;

    @Field(() => [location_area_encounter_ratesScalarWhereInput], {nullable:true})
    @Type(() => location_area_encounter_ratesScalarWhereInput)
    deleteMany?: Array<location_area_encounter_ratesScalarWhereInput>;
}
