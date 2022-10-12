import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class item_fling_effect_proseScalarWhereInput {

    @Field(() => [item_fling_effect_proseScalarWhereInput], {nullable:true})
    AND?: Array<item_fling_effect_proseScalarWhereInput>;

    @Field(() => [item_fling_effect_proseScalarWhereInput], {nullable:true})
    OR?: Array<item_fling_effect_proseScalarWhereInput>;

    @Field(() => [item_fling_effect_proseScalarWhereInput], {nullable:true})
    NOT?: Array<item_fling_effect_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_fling_effect_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    effect?: StringFilter;
}
