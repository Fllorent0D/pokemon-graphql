import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutMove_changelogInput } from './types-create-without-move-changelog.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutMove_changelogInput } from './types-create-or-connect-without-move-changelog.input';
import { typesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class typesCreateNestedOneWithoutMove_changelogInput {

    @Field(() => typesCreateWithoutMove_changelogInput, {nullable:true})
    @Type(() => typesCreateWithoutMove_changelogInput)
    create?: typesCreateWithoutMove_changelogInput;

    @Field(() => typesCreateOrConnectWithoutMove_changelogInput, {nullable:true})
    @Type(() => typesCreateOrConnectWithoutMove_changelogInput)
    connectOrCreate?: typesCreateOrConnectWithoutMove_changelogInput;

    @Field(() => typesWhereUniqueInput, {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: typesWhereUniqueInput;
}
