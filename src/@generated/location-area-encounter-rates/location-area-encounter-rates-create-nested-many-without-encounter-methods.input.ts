import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesCreateWithoutEncounter_methodsInput } from './location-area-encounter-rates-create-without-encounter-methods.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesCreateOrConnectWithoutEncounter_methodsInput } from './location-area-encounter-rates-create-or-connect-without-encounter-methods.input';
import { location_area_encounter_ratesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';

@InputType()
export class location_area_encounter_ratesCreateNestedManyWithoutEncounter_methodsInput {

    @Field(() => [location_area_encounter_ratesCreateWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesCreateWithoutEncounter_methodsInput)
    create?: Array<location_area_encounter_ratesCreateWithoutEncounter_methodsInput>;

    @Field(() => [location_area_encounter_ratesCreateOrConnectWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesCreateOrConnectWithoutEncounter_methodsInput)
    connectOrCreate?: Array<location_area_encounter_ratesCreateOrConnectWithoutEncounter_methodsInput>;

    @Field(() => [location_area_encounter_ratesWhereUniqueInput], {nullable:true})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    connect?: Array<location_area_encounter_ratesWhereUniqueInput>;
}
