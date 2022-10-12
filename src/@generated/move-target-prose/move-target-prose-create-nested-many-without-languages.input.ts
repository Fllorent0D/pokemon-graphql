import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_target_proseCreateWithoutLanguagesInput } from './move-target-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_target_proseCreateOrConnectWithoutLanguagesInput } from './move-target-prose-create-or-connect-without-languages.input';
import { move_target_proseWhereUniqueInput } from './move-target-prose-where-unique.input';

@InputType()
export class move_target_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [move_target_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_target_proseCreateWithoutLanguagesInput)
    create?: Array<move_target_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_target_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_target_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_target_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_target_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_target_proseWhereUniqueInput)
    connect?: Array<move_target_proseWhereUniqueInput>;
}
