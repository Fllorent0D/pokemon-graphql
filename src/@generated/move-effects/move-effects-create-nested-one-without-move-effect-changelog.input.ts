import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsCreateWithoutMove_effect_changelogInput } from './move-effects-create-without-move-effect-changelog.input';
import { Type } from 'class-transformer';
import { move_effectsCreateOrConnectWithoutMove_effect_changelogInput } from './move-effects-create-or-connect-without-move-effect-changelog.input';
import { move_effectsWhereUniqueInput } from './move-effects-where-unique.input';

@InputType()
export class move_effectsCreateNestedOneWithoutMove_effect_changelogInput {

    @Field(() => move_effectsCreateWithoutMove_effect_changelogInput, {nullable:true})
    @Type(() => move_effectsCreateWithoutMove_effect_changelogInput)
    create?: move_effectsCreateWithoutMove_effect_changelogInput;

    @Field(() => move_effectsCreateOrConnectWithoutMove_effect_changelogInput, {nullable:true})
    @Type(() => move_effectsCreateOrConnectWithoutMove_effect_changelogInput)
    connectOrCreate?: move_effectsCreateOrConnectWithoutMove_effect_changelogInput;

    @Field(() => move_effectsWhereUniqueInput, {nullable:true})
    @Type(() => move_effectsWhereUniqueInput)
    connect?: move_effectsWhereUniqueInput;
}
