import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class berry_flavorsScalarWhereInput {

    @Field(() => [berry_flavorsScalarWhereInput], {nullable:true})
    AND?: Array<berry_flavorsScalarWhereInput>;

    @Field(() => [berry_flavorsScalarWhereInput], {nullable:true})
    OR?: Array<berry_flavorsScalarWhereInput>;

    @Field(() => [berry_flavorsScalarWhereInput], {nullable:true})
    NOT?: Array<berry_flavorsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    berry_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    contest_type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    flavor?: IntFilter;
}
