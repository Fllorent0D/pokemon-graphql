import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class location_area_encounter_ratesScalarWhereInput {

    @Field(() => [location_area_encounter_ratesScalarWhereInput], {nullable:true})
    AND?: Array<location_area_encounter_ratesScalarWhereInput>;

    @Field(() => [location_area_encounter_ratesScalarWhereInput], {nullable:true})
    OR?: Array<location_area_encounter_ratesScalarWhereInput>;

    @Field(() => [location_area_encounter_ratesScalarWhereInput], {nullable:true})
    NOT?: Array<location_area_encounter_ratesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_area_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rate?: IntNullableFilter;
}
