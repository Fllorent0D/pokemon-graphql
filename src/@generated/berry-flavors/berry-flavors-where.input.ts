import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Contest_typesRelationFilter } from '../prisma/contest-types-relation-filter.input';
import { BerriesRelationFilter } from '../prisma/berries-relation-filter.input';

@InputType()
export class berry_flavorsWhereInput {

    @Field(() => [berry_flavorsWhereInput], {nullable:true})
    AND?: Array<berry_flavorsWhereInput>;

    @Field(() => [berry_flavorsWhereInput], {nullable:true})
    OR?: Array<berry_flavorsWhereInput>;

    @Field(() => [berry_flavorsWhereInput], {nullable:true})
    NOT?: Array<berry_flavorsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    berry_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    contest_type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    flavor?: IntFilter;

    @Field(() => Contest_typesRelationFilter, {nullable:true})
    contest_types?: Contest_typesRelationFilter;

    @Field(() => BerriesRelationFilter, {nullable:true})
    berries?: BerriesRelationFilter;
}
