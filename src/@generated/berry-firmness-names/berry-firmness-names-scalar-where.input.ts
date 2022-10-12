import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class berry_firmness_namesScalarWhereInput {

    @Field(() => [berry_firmness_namesScalarWhereInput], {nullable:true})
    AND?: Array<berry_firmness_namesScalarWhereInput>;

    @Field(() => [berry_firmness_namesScalarWhereInput], {nullable:true})
    OR?: Array<berry_firmness_namesScalarWhereInput>;

    @Field(() => [berry_firmness_namesScalarWhereInput], {nullable:true})
    NOT?: Array<berry_firmness_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    berry_firmness_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
