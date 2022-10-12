import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogCreateWithoutTypesInput } from './move-changelog-create-without-types.input';
import { Type } from 'class-transformer';
import { move_changelogCreateOrConnectWithoutTypesInput } from './move-changelog-create-or-connect-without-types.input';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';

@InputType()
export class move_changelogCreateNestedManyWithoutTypesInput {

    @Field(() => [move_changelogCreateWithoutTypesInput], {nullable:true})
    @Type(() => move_changelogCreateWithoutTypesInput)
    create?: Array<move_changelogCreateWithoutTypesInput>;

    @Field(() => [move_changelogCreateOrConnectWithoutTypesInput], {nullable:true})
    @Type(() => move_changelogCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Array<move_changelogCreateOrConnectWithoutTypesInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    connect?: Array<move_changelogWhereUniqueInput>;
}
