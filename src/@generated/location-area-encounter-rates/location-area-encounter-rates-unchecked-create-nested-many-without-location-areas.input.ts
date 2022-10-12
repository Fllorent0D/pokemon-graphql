import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesCreateWithoutLocation_areasInput } from './location-area-encounter-rates-create-without-location-areas.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesCreateOrConnectWithoutLocation_areasInput } from './location-area-encounter-rates-create-or-connect-without-location-areas.input';
import { location_area_encounter_ratesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';

@InputType()
export class location_area_encounter_ratesUncheckedCreateNestedManyWithoutLocation_areasInput {

    @Field(() => [location_area_encounter_ratesCreateWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_encounter_ratesCreateWithoutLocation_areasInput)
    create?: Array<location_area_encounter_ratesCreateWithoutLocation_areasInput>;

    @Field(() => [location_area_encounter_ratesCreateOrConnectWithoutLocation_areasInput], {nullable:true})
    @Type(() => location_area_encounter_ratesCreateOrConnectWithoutLocation_areasInput)
    connectOrCreate?: Array<location_area_encounter_ratesCreateOrConnectWithoutLocation_areasInput>;

    @Field(() => [location_area_encounter_ratesWhereUniqueInput], {nullable:true})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    connect?: Array<location_area_encounter_ratesWhereUniqueInput>;
}
