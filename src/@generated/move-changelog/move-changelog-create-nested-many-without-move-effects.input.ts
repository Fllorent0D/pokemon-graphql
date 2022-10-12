import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogCreateWithoutMove_effectsInput } from './move-changelog-create-without-move-effects.input';
import { Type } from 'class-transformer';
import { move_changelogCreateOrConnectWithoutMove_effectsInput } from './move-changelog-create-or-connect-without-move-effects.input';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';

@InputType()
export class move_changelogCreateNestedManyWithoutMove_effectsInput {

    @Field(() => [move_changelogCreateWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_changelogCreateWithoutMove_effectsInput)
    create?: Array<move_changelogCreateWithoutMove_effectsInput>;

    @Field(() => [move_changelogCreateOrConnectWithoutMove_effectsInput], {nullable:true})
    @Type(() => move_changelogCreateOrConnectWithoutMove_effectsInput)
    connectOrCreate?: Array<move_changelogCreateOrConnectWithoutMove_effectsInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    connect?: Array<move_changelogWhereUniqueInput>;
}
