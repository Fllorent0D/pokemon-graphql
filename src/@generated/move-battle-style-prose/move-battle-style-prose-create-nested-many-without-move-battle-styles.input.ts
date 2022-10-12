import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_style_proseCreateWithoutMove_battle_stylesInput } from './move-battle-style-prose-create-without-move-battle-styles.input';
import { Type } from 'class-transformer';
import { move_battle_style_proseCreateOrConnectWithoutMove_battle_stylesInput } from './move-battle-style-prose-create-or-connect-without-move-battle-styles.input';
import { move_battle_style_proseWhereUniqueInput } from './move-battle-style-prose-where-unique.input';

@InputType()
export class move_battle_style_proseCreateNestedManyWithoutMove_battle_stylesInput {

    @Field(() => [move_battle_style_proseCreateWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => move_battle_style_proseCreateWithoutMove_battle_stylesInput)
    create?: Array<move_battle_style_proseCreateWithoutMove_battle_stylesInput>;

    @Field(() => [move_battle_style_proseCreateOrConnectWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => move_battle_style_proseCreateOrConnectWithoutMove_battle_stylesInput)
    connectOrCreate?: Array<move_battle_style_proseCreateOrConnectWithoutMove_battle_stylesInput>;

    @Field(() => [move_battle_style_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    connect?: Array<move_battle_style_proseWhereUniqueInput>;
}
