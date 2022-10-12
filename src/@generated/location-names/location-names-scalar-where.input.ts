import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class location_namesScalarWhereInput {

    @Field(() => [location_namesScalarWhereInput], {nullable:true})
    AND?: Array<location_namesScalarWhereInput>;

    @Field(() => [location_namesScalarWhereInput], {nullable:true})
    OR?: Array<location_namesScalarWhereInput>;

    @Field(() => [location_namesScalarWhereInput], {nullable:true})
    NOT?: Array<location_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
