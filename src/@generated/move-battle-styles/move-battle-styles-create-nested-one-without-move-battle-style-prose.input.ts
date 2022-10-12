import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_stylesCreateWithoutMove_battle_style_proseInput } from './move-battle-styles-create-without-move-battle-style-prose.input';
import { Type } from 'class-transformer';
import { move_battle_stylesCreateOrConnectWithoutMove_battle_style_proseInput } from './move-battle-styles-create-or-connect-without-move-battle-style-prose.input';
import { move_battle_stylesWhereUniqueInput } from './move-battle-styles-where-unique.input';

@InputType()
export class move_battle_stylesCreateNestedOneWithoutMove_battle_style_proseInput {

    @Field(() => move_battle_stylesCreateWithoutMove_battle_style_proseInput, {nullable:true})
    @Type(() => move_battle_stylesCreateWithoutMove_battle_style_proseInput)
    create?: move_battle_stylesCreateWithoutMove_battle_style_proseInput;

    @Field(() => move_battle_stylesCreateOrConnectWithoutMove_battle_style_proseInput, {nullable:true})
    @Type(() => move_battle_stylesCreateOrConnectWithoutMove_battle_style_proseInput)
    connectOrCreate?: move_battle_stylesCreateOrConnectWithoutMove_battle_style_proseInput;

    @Field(() => move_battle_stylesWhereUniqueInput, {nullable:true})
    @Type(() => move_battle_stylesWhereUniqueInput)
    connect?: move_battle_stylesWhereUniqueInput;
}
