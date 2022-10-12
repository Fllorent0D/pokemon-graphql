import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class stat_hint_namesScalarWhereInput {

    @Field(() => [stat_hint_namesScalarWhereInput], {nullable:true})
    AND?: Array<stat_hint_namesScalarWhereInput>;

    @Field(() => [stat_hint_namesScalarWhereInput], {nullable:true})
    OR?: Array<stat_hint_namesScalarWhereInput>;

    @Field(() => [stat_hint_namesScalarWhereInput], {nullable:true})
    NOT?: Array<stat_hint_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    stat_hint_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    message?: StringFilter;
}
