import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_namesCreateWithoutLanguagesInput } from './move-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_namesCreateOrConnectWithoutLanguagesInput } from './move-names-create-or-connect-without-languages.input';
import { move_namesWhereUniqueInput } from './move-names-where-unique.input';

@InputType()
export class move_namesCreateNestedManyWithoutLanguagesInput {

    @Field(() => [move_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_namesCreateWithoutLanguagesInput)
    create?: Array<move_namesCreateWithoutLanguagesInput>;

    @Field(() => [move_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_namesWhereUniqueInput)
    connect?: Array<move_namesWhereUniqueInput>;
}
