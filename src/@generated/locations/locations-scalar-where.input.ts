import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class locationsScalarWhereInput {

    @Field(() => [locationsScalarWhereInput], {nullable:true})
    AND?: Array<locationsScalarWhereInput>;

    @Field(() => [locationsScalarWhereInput], {nullable:true})
    OR?: Array<locationsScalarWhereInput>;

    @Field(() => [locationsScalarWhereInput], {nullable:true})
    NOT?: Array<locationsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    region_id?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;
}
