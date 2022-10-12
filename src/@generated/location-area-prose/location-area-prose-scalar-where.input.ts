import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class location_area_proseScalarWhereInput {

    @Field(() => [location_area_proseScalarWhereInput], {nullable:true})
    AND?: Array<location_area_proseScalarWhereInput>;

    @Field(() => [location_area_proseScalarWhereInput], {nullable:true})
    OR?: Array<location_area_proseScalarWhereInput>;

    @Field(() => [location_area_proseScalarWhereInput], {nullable:true})
    NOT?: Array<location_area_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_area_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
