import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class move_battle_style_proseScalarWhereInput {

    @Field(() => [move_battle_style_proseScalarWhereInput], {nullable:true})
    AND?: Array<move_battle_style_proseScalarWhereInput>;

    @Field(() => [move_battle_style_proseScalarWhereInput], {nullable:true})
    OR?: Array<move_battle_style_proseScalarWhereInput>;

    @Field(() => [move_battle_style_proseScalarWhereInput], {nullable:true})
    NOT?: Array<move_battle_style_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_battle_style_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
