import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsCreateWithoutVersion_namesInput } from './versions-create-without-version-names.input';
import { Type } from 'class-transformer';
import { versionsCreateOrConnectWithoutVersion_namesInput } from './versions-create-or-connect-without-version-names.input';
import { versionsUpsertWithoutVersion_namesInput } from './versions-upsert-without-version-names.input';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { versionsUpdateWithoutVersion_namesInput } from './versions-update-without-version-names.input';

@InputType()
export class versionsUpdateOneRequiredWithoutVersion_namesNestedInput {

    @Field(() => versionsCreateWithoutVersion_namesInput, {nullable:true})
    @Type(() => versionsCreateWithoutVersion_namesInput)
    create?: versionsCreateWithoutVersion_namesInput;

    @Field(() => versionsCreateOrConnectWithoutVersion_namesInput, {nullable:true})
    @Type(() => versionsCreateOrConnectWithoutVersion_namesInput)
    connectOrCreate?: versionsCreateOrConnectWithoutVersion_namesInput;

    @Field(() => versionsUpsertWithoutVersion_namesInput, {nullable:true})
    @Type(() => versionsUpsertWithoutVersion_namesInput)
    upsert?: versionsUpsertWithoutVersion_namesInput;

    @Field(() => versionsWhereUniqueInput, {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    connect?: versionsWhereUniqueInput;

    @Field(() => versionsUpdateWithoutVersion_namesInput, {nullable:true})
    @Type(() => versionsUpdateWithoutVersion_namesInput)
    update?: versionsUpdateWithoutVersion_namesInput;
}
