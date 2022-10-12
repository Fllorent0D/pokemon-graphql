import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_style_proseCreateWithoutMove_battle_stylesInput } from './move-battle-style-prose-create-without-move-battle-styles.input';
import { Type } from 'class-transformer';
import { move_battle_style_proseCreateOrConnectWithoutMove_battle_stylesInput } from './move-battle-style-prose-create-or-connect-without-move-battle-styles.input';
import { move_battle_style_proseUpsertWithWhereUniqueWithoutMove_battle_stylesInput } from './move-battle-style-prose-upsert-with-where-unique-without-move-battle-styles.input';
import { move_battle_style_proseWhereUniqueInput } from './move-battle-style-prose-where-unique.input';
import { move_battle_style_proseUpdateWithWhereUniqueWithoutMove_battle_stylesInput } from './move-battle-style-prose-update-with-where-unique-without-move-battle-styles.input';
import { move_battle_style_proseUpdateManyWithWhereWithoutMove_battle_stylesInput } from './move-battle-style-prose-update-many-with-where-without-move-battle-styles.input';
import { move_battle_style_proseScalarWhereInput } from './move-battle-style-prose-scalar-where.input';

@InputType()
export class move_battle_style_proseUncheckedUpdateManyWithoutMove_battle_stylesNestedInput {

    @Field(() => [move_battle_style_proseCreateWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => move_battle_style_proseCreateWithoutMove_battle_stylesInput)
    create?: Array<move_battle_style_proseCreateWithoutMove_battle_stylesInput>;

    @Field(() => [move_battle_style_proseCreateOrConnectWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => move_battle_style_proseCreateOrConnectWithoutMove_battle_stylesInput)
    connectOrCreate?: Array<move_battle_style_proseCreateOrConnectWithoutMove_battle_stylesInput>;

    @Field(() => [move_battle_style_proseUpsertWithWhereUniqueWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => move_battle_style_proseUpsertWithWhereUniqueWithoutMove_battle_stylesInput)
    upsert?: Array<move_battle_style_proseUpsertWithWhereUniqueWithoutMove_battle_stylesInput>;

    @Field(() => [move_battle_style_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    set?: Array<move_battle_style_proseWhereUniqueInput>;

    @Field(() => [move_battle_style_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    disconnect?: Array<move_battle_style_proseWhereUniqueInput>;

    @Field(() => [move_battle_style_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    delete?: Array<move_battle_style_proseWhereUniqueInput>;

    @Field(() => [move_battle_style_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    connect?: Array<move_battle_style_proseWhereUniqueInput>;

    @Field(() => [move_battle_style_proseUpdateWithWhereUniqueWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => move_battle_style_proseUpdateWithWhereUniqueWithoutMove_battle_stylesInput)
    update?: Array<move_battle_style_proseUpdateWithWhereUniqueWithoutMove_battle_stylesInput>;

    @Field(() => [move_battle_style_proseUpdateManyWithWhereWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => move_battle_style_proseUpdateManyWithWhereWithoutMove_battle_stylesInput)
    updateMany?: Array<move_battle_style_proseUpdateManyWithWhereWithoutMove_battle_stylesInput>;

    @Field(() => [move_battle_style_proseScalarWhereInput], {nullable:true})
    @Type(() => move_battle_style_proseScalarWhereInput)
    deleteMany?: Array<move_battle_style_proseScalarWhereInput>;
}
