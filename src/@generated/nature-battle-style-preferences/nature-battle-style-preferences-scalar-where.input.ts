import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class nature_battle_style_preferencesScalarWhereInput {

    @Field(() => [nature_battle_style_preferencesScalarWhereInput], {nullable:true})
    AND?: Array<nature_battle_style_preferencesScalarWhereInput>;

    @Field(() => [nature_battle_style_preferencesScalarWhereInput], {nullable:true})
    OR?: Array<nature_battle_style_preferencesScalarWhereInput>;

    @Field(() => [nature_battle_style_preferencesScalarWhereInput], {nullable:true})
    NOT?: Array<nature_battle_style_preferencesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    nature_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    move_battle_style_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    low_hp_preference?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    high_hp_preference?: IntFilter;
}
