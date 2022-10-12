import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_proseCreateWithoutLanguagesInput } from './move-flag-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_flag_proseCreateOrConnectWithoutLanguagesInput } from './move-flag-prose-create-or-connect-without-languages.input';
import { move_flag_proseWhereUniqueInput } from './move-flag-prose-where-unique.input';

@InputType()
export class move_flag_proseUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [move_flag_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flag_proseCreateWithoutLanguagesInput)
    create?: Array<move_flag_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_flag_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flag_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_flag_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_proseWhereUniqueInput)
    connect?: Array<move_flag_proseWhereUniqueInput>;
}
