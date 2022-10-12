import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutMove_changelogInput } from './types-create-without-move-changelog.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutMove_changelogInput } from './types-create-or-connect-without-move-changelog.input';
import { typesUpsertWithoutMove_changelogInput } from './types-upsert-without-move-changelog.input';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { typesUpdateWithoutMove_changelogInput } from './types-update-without-move-changelog.input';

@InputType()
export class typesUpdateOneWithoutMove_changelogNestedInput {

    @Field(() => typesCreateWithoutMove_changelogInput, {nullable:true})
    @Type(() => typesCreateWithoutMove_changelogInput)
    create?: typesCreateWithoutMove_changelogInput;

    @Field(() => typesCreateOrConnectWithoutMove_changelogInput, {nullable:true})
    @Type(() => typesCreateOrConnectWithoutMove_changelogInput)
    connectOrCreate?: typesCreateOrConnectWithoutMove_changelogInput;

    @Field(() => typesUpsertWithoutMove_changelogInput, {nullable:true})
    @Type(() => typesUpsertWithoutMove_changelogInput)
    upsert?: typesUpsertWithoutMove_changelogInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => typesWhereUniqueInput, {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: typesWhereUniqueInput;

    @Field(() => typesUpdateWithoutMove_changelogInput, {nullable:true})
    @Type(() => typesUpdateWithoutMove_changelogInput)
    update?: typesUpdateWithoutMove_changelogInput;
}
