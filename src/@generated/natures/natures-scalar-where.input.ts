import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class naturesScalarWhereInput {

    @Field(() => [naturesScalarWhereInput], {nullable:true})
    AND?: Array<naturesScalarWhereInput>;

    @Field(() => [naturesScalarWhereInput], {nullable:true})
    OR?: Array<naturesScalarWhereInput>;

    @Field(() => [naturesScalarWhereInput], {nullable:true})
    NOT?: Array<naturesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    decreased_stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    increased_stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    hates_flavor_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    likes_flavor_id?: IntFilter;
}
