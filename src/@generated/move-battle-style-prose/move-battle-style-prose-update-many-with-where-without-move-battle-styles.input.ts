import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_style_proseScalarWhereInput } from './move-battle-style-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { move_battle_style_proseUpdateManyMutationInput } from './move-battle-style-prose-update-many-mutation.input';

@InputType()
export class move_battle_style_proseUpdateManyWithWhereWithoutMove_battle_stylesInput {

    @Field(() => move_battle_style_proseScalarWhereInput, {nullable:false})
    @Type(() => move_battle_style_proseScalarWhereInput)
    where!: move_battle_style_proseScalarWhereInput;

    @Field(() => move_battle_style_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_battle_style_proseUpdateManyMutationInput)
    data!: move_battle_style_proseUpdateManyMutationInput;
}
