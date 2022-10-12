import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class egg_group_proseScalarWhereInput {

    @Field(() => [egg_group_proseScalarWhereInput], {nullable:true})
    AND?: Array<egg_group_proseScalarWhereInput>;

    @Field(() => [egg_group_proseScalarWhereInput], {nullable:true})
    OR?: Array<egg_group_proseScalarWhereInput>;

    @Field(() => [egg_group_proseScalarWhereInput], {nullable:true})
    NOT?: Array<egg_group_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    egg_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
