import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesCreateWithoutEncounter_methodsInput } from './location-area-encounter-rates-create-without-encounter-methods.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesCreateOrConnectWithoutEncounter_methodsInput } from './location-area-encounter-rates-create-or-connect-without-encounter-methods.input';
import { location_area_encounter_ratesUpsertWithWhereUniqueWithoutEncounter_methodsInput } from './location-area-encounter-rates-upsert-with-where-unique-without-encounter-methods.input';
import { location_area_encounter_ratesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { location_area_encounter_ratesUpdateWithWhereUniqueWithoutEncounter_methodsInput } from './location-area-encounter-rates-update-with-where-unique-without-encounter-methods.input';
import { location_area_encounter_ratesUpdateManyWithWhereWithoutEncounter_methodsInput } from './location-area-encounter-rates-update-many-with-where-without-encounter-methods.input';
import { location_area_encounter_ratesScalarWhereInput } from './location-area-encounter-rates-scalar-where.input';

@InputType()
export class location_area_encounter_ratesUpdateManyWithoutEncounter_methodsNestedInput {

    @Field(() => [location_area_encounter_ratesCreateWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesCreateWithoutEncounter_methodsInput)
    create?: Array<location_area_encounter_ratesCreateWithoutEncounter_methodsInput>;

    @Field(() => [location_area_encounter_ratesCreateOrConnectWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesCreateOrConnectWithoutEncounter_methodsInput)
    connectOrCreate?: Array<location_area_encounter_ratesCreateOrConnectWithoutEncounter_methodsInput>;

    @Field(() => [location_area_encounter_ratesUpsertWithWhereUniqueWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesUpsertWithWhereUniqueWithoutEncounter_methodsInput)
    upsert?: Array<location_area_encounter_ratesUpsertWithWhereUniqueWithoutEncounter_methodsInput>;

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

    @Field(() => [location_area_encounter_ratesUpdateWithWhereUniqueWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesUpdateWithWhereUniqueWithoutEncounter_methodsInput)
    update?: Array<location_area_encounter_ratesUpdateWithWhereUniqueWithoutEncounter_methodsInput>;

    @Field(() => [location_area_encounter_ratesUpdateManyWithWhereWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => location_area_encounter_ratesUpdateManyWithWhereWithoutEncounter_methodsInput)
    updateMany?: Array<location_area_encounter_ratesUpdateManyWithWhereWithoutEncounter_methodsInput>;

    @Field(() => [location_area_encounter_ratesScalarWhereInput], {nullable:true})
    @Type(() => location_area_encounter_ratesScalarWhereInput)
    deleteMany?: Array<location_area_encounter_ratesScalarWhereInput>;
}
