import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogCreateWithoutMove_effectsInput } from './move-effect-changelog-create-without-move-effects.input';
import { Type } from 'class-transformer';
import { move_effect_changelogCreateOrConnectWithoutMove_effectsInput } from './move-effect-changelog-create-or-connect-without-move-effects.input';
import { move_effect_changelogWhereUniqueInput } from './move-effect-changelog-where-unique.input';

@InputType()
export class move_effect_changelogUncheckedCreateNestedManyWithoutMove_effectsInput {

    @Field(() => [move_effect_changelogCreateWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_changelogCreateWithoutMove_effectsInput)
    create?: Array<move_effect_changelogCreateWithoutMove_effectsInput>;

    @Field(() => [move_effect_changelogCreateOrConnectWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_effect_changelogCreateOrConnectWithoutMove_effectsInput)
    connectOrCreate?: Array<move_effect_changelogCreateOrConnectWithoutMove_effectsInput>;

    @Field(() => [move_effect_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_changelogWhereUniqueInput)
    connect?: Array<move_effect_changelogWhereUniqueInput>;
}
