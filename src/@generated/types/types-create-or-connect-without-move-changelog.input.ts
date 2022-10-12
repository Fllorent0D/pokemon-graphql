import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutMove_changelogInput } from './types-create-without-move-changelog.input';

@InputType()
export class typesCreateOrConnectWithoutMove_changelogInput {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesCreateWithoutMove_changelogInput, {nullable:false})
    @Type(() => typesCreateWithoutMove_changelogInput)
    create!: typesCreateWithoutMove_changelogInput;
}
