import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class experienceScalarWhereInput {

    @Field(() => [experienceScalarWhereInput], {nullable:true})
    AND?: Array<experienceScalarWhereInput>;

    @Field(() => [experienceScalarWhereInput], {nullable:true})
    OR?: Array<experienceScalarWhereInput>;

    @Field(() => [experienceScalarWhereInput], {nullable:true})
    NOT?: Array<experienceScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    growth_rate_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    level?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    experience?: IntFilter;
}
