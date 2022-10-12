import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogCreateWithoutMove_effectsInput } from './move-changelog-create-without-move-effects.input';
import { Type } from 'class-transformer';
import { move_changelogCreateOrConnectWithoutMove_effectsInput } from './move-changelog-create-or-connect-without-move-effects.input';
import { move_changelogUpsertWithWhereUniqueWithoutMove_effectsInput } from './move-changelog-upsert-with-where-unique-without-move-effects.input';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';
import { move_changelogUpdateWithWhereUniqueWithoutMove_effectsInput } from './move-changelog-update-with-where-unique-without-move-effects.input';
import { move_changelogUpdateManyWithWhereWithoutMove_effectsInput } from './move-changelog-update-many-with-where-without-move-effects.input';
import { move_changelogScalarWhereInput } from './move-changelog-scalar-where.input';

@InputType()
export class move_changelogUpdateManyWithoutMove_effectsNestedInput {

    @Field(() => [move_changelogCreateWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_changelogCreateWithoutMove_effectsInput)
    create?: Array<move_changelogCreateWithoutMove_effectsInput>;

    @Field(() => [move_changelogCreateOrConnectWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_changelogCreateOrConnectWithoutMove_effectsInput)
    connectOrCreate?: Array<move_changelogCreateOrConnectWithoutMove_effectsInput>;

    @Field(() => [move_changelogUpsertWithWhereUniqueWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_changelogUpsertWithWhereUniqueWithoutMove_effectsInput)
    upsert?: Array<move_changelogUpsertWithWhereUniqueWithoutMove_effectsInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    set?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    disconnect?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    delete?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    connect?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogUpdateWithWhereUniqueWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_changelogUpdateWithWhereUniqueWithoutMove_effectsInput)
    update?: Array<move_changelogUpdateWithWhereUniqueWithoutMove_effectsInput>;

    @Field(() => [move_changelogUpdateManyWithWhereWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_changelogUpdateManyWithWhereWithoutMove_effectsInput)
    updateMany?: Array<move_changelogUpdateManyWithWhereWithoutMove_effectsInput>;

    @Field(() => [move_changelogScalarWhereInput], {nullable:true})
    @Type(() => move_changelogScalarWhereInput)
    deleteMany?: Array<move_changelogScalarWhereInput>;
}
