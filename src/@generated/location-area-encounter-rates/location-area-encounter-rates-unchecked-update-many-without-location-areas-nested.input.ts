import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesCreateWithoutLocation_areasInput } from './location-area-encounter-rates-create-without-location-areas.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesCreateOrConnectWithoutLocation_areasInput } from './location-area-encounter-rates-create-or-connect-without-location-areas.input';
import { location_area_encounter_ratesUpsertWithWhereUniqueWithoutLocation_areasInput } from './location-area-encounter-rates-upsert-with-where-unique-without-location-areas.input';
import { location_area_encounter_ratesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { location_area_encounter_ratesUpdateWithWhereUniqueWithoutLocation_areasInput } from './location-area-encounter-rates-update-with-where-unique-without-location-areas.input';
import { location_area_encounter_ratesUpdateManyWithWhereWithoutLocation_areasInput } from './location-area-encounter-rates-update-many-with-where-without-location-areas.input';
import { location_area_encounter_ratesScalarWhereInput } from './location-area-encounter-rates-scalar-where.input';

@InputType()
export class location_area_encounter_ratesUncheckedUpdateManyWithoutLocation_areasNestedInput {

    @Field(() => [location_area_encounter_ratesCreateWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_encounter_ratesCreateWithoutLocation_areasInput)
    create?: Array<location_area_encounter_ratesCreateWithoutLocation_areasInput>;

    @Field(() => [location_area_encounter_ratesCreateOrConnectWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_encounter_ratesCreateOrConnectWithoutLocation_areasInput)
    connectOrCreate?: Array<location_area_encounter_ratesCreateOrConnectWithoutLocation_areasInput>;

    @Field(() => [location_area_encounter_ratesUpsertWithWhereUniqueWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_encounter_ratesUpsertWithWhereUniqueWithoutLocation_areasInput)
    upsert?: Array<location_area_encounter_ratesUpsertWithWhereUniqueWithoutLocation_areasInput>;

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

    @Field(() => [location_area_encounter_ratesUpdateWithWhereUniqueWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_encounter_ratesUpdateWithWhereUniqueWithoutLocation_areasInput)
    update?: Array<location_area_encounter_ratesUpdateWithWhereUniqueWithoutLocation_areasInput>;

    @Field(() => [location_area_encounter_ratesUpdateManyWithWhereWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_encounter_ratesUpdateManyWithWhereWithoutLocation_areasInput)
    updateMany?: Array<location_area_encounter_ratesUpdateManyWithWhereWithoutLocation_areasInput>;

    @Field(() => [location_area_encounter_ratesScalarWhereInput], {nullable:true})
    @Type(() => location_area_encounter_ratesScalarWhereInput)
    deleteMany?: Array<location_area_encounter_ratesScalarWhereInput>;
}
