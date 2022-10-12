import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_stylesCreateWithoutMove_battle_style_proseInput } from './move-battle-styles-create-without-move-battle-style-prose.input';
import { Type } from 'class-transformer';
import { move_battle_stylesCreateOrConnectWithoutMove_battle_style_proseInput } from './move-battle-styles-create-or-connect-without-move-battle-style-prose.input';
import { move_battle_stylesUpsertWithoutMove_battle_style_proseInput } from './move-battle-styles-upsert-without-move-battle-style-prose.input';
import { move_battle_stylesWhereUniqueInput } from './move-battle-styles-where-unique.input';
import { move_battle_stylesUpdateWithoutMove_battle_style_proseInput } from './move-battle-styles-update-without-move-battle-style-prose.input';

@InputType()
export class move_battle_stylesUpdateOneRequiredWithoutMove_battle_style_proseNestedInput {

    @Field(() => move_battle_stylesCreateWithoutMove_battle_style_proseInput, {nullable:true})
    @Type(() => move_battle_stylesCreateWithoutMove_battle_style_proseInput)
    create?: move_battle_stylesCreateWithoutMove_battle_style_proseInput;

    @Field(() => move_battle_stylesCreateOrConnectWithoutMove_battle_style_proseInput, {nullable:true})
    @Type(() => move_battle_stylesCreateOrConnectWithoutMove_battle_style_proseInput)
    connectOrCreate?: move_battle_stylesCreateOrConnectWithoutMove_battle_style_proseInput;

    @Field(() => move_battle_stylesUpsertWithoutMove_battle_style_proseInput, {nullable:true})
    @Type(() => move_battle_stylesUpsertWithoutMove_battle_style_proseInput)
    upsert?: move_battle_stylesUpsertWithoutMove_battle_style_proseInput;

    @Field(() => move_battle_stylesWhereUniqueInput, {nullable:true})
    @Type(() => move_battle_stylesWhereUniqueInput)
    connect?: move_battle_stylesWhereUniqueInput;

    @Field(() => move_battle_stylesUpdateWithoutMove_battle_style_proseInput, {nullable:true})
    @Type(() => move_battle_stylesUpdateWithoutMove_battle_style_proseInput)
    update?: move_battle_stylesUpdateWithoutMove_battle_style_proseInput;
}
