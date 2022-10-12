import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsCreateWithoutMove_changelogInput } from './move-effects-create-without-move-changelog.input';
import { Type } from 'class-transformer';
import { move_effectsCreateOrConnectWithoutMove_changelogInput } from './move-effects-create-or-connect-without-move-changelog.input';
import { move_effectsUpsertWithoutMove_changelogInput } from './move-effects-upsert-without-move-changelog.input';
import { move_effectsWhereUniqueInput } from './move-effects-where-unique.input';
import { move_effectsUpdateWithoutMove_changelogInput } from './move-effects-update-without-move-changelog.input';

@InputType()
export class move_effectsUpdateOneWithoutMove_changelogNestedInput {

    @Field(() => move_effectsCreateWithoutMove_changelogInput, {nullable:true})
    @Type(() => move_effectsCreateWithoutMove_changelogInput)
    create?: move_effectsCreateWithoutMove_changelogInput;

    @Field(() => move_effectsCreateOrConnectWithoutMove_changelogInput, {nullable:true})
    @Type(() => move_effectsCreateOrConnectWithoutMove_changelogInput)
    connectOrCreate?: move_effectsCreateOrConnectWithoutMove_changelogInput;

    @Field(() => move_effectsUpsertWithoutMove_changelogInput, {nullable:true})
    @Type(() => move_effectsUpsertWithoutMove_changelogInput)
    upsert?: move_effectsUpsertWithoutMove_changelogInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => move_effectsWhereUniqueInput, {nullable:true})
    @Type(() => move_effectsWhereUniqueInput)
    connect?: move_effectsWhereUniqueInput;

    @Field(() => move_effectsUpdateWithoutMove_changelogInput, {nullable:true})
    @Type(() => move_effectsUpdateWithoutMove_changelogInput)
    update?: move_effectsUpdateWithoutMove_changelogInput;
}
