import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesCreateWithoutVersionsInput } from './location-area-encounter-rates-create-without-versions.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesCreateOrConnectWithoutVersionsInput } from './location-area-encounter-rates-create-or-connect-without-versions.input';
import { location_area_encounter_ratesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';

@InputType()
export class location_area_encounter_ratesCreateNestedManyWithoutVersionsInput {

    @Field(() => [location_area_encounter_ratesCreateWithoutVersionsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesCreateWithoutVersionsInput)
    create?: Array<location_area_encounter_ratesCreateWithoutVersionsInput>;

    @Field(() => [location_area_encounter_ratesCreateOrConnectWithoutVersionsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: Array<location_area_encounter_ratesCreateOrConnectWithoutVersionsInput>;

    @Field(() => [location_area_encounter_ratesWhereUniqueInput], {nullable:true})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    connect?: Array<location_area_encounter_ratesWhereUniqueInput>;
}
