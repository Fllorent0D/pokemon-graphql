import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class typesScalarWhereInput {

    @Field(() => [typesScalarWhereInput], {nullable:true})
    AND?: Array<typesScalarWhereInput>;

    @Field(() => [typesScalarWhereInput], {nullable:true})
    OR?: Array<typesScalarWhereInput>;

    @Field(() => [typesScalarWhereInput], {nullable:true})
    NOT?: Array<typesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    damage_class_id?: IntNullableFilter;
}
